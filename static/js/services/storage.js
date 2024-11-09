import localforage from 'localforage';

// Initialize stores for different data types
const stores = {
  videos: localforage.createInstance({
    name: 'apprVideoManager',
    storeName: 'videos'
  }),
  pendingChanges: localforage.createInstance({
    name: 'apprVideoManager',
    storeName: 'pendingChanges'
  })
};

// Network status tracking
let isOnline = navigator.onLine;
window.addEventListener('online', () => {
  isOnline = true;
  processPendingChanges();
});
window.addEventListener('offline', () => isOnline = false);

export const videoStorage = {
  async getAllVideos() {
    try {
      return await stores.videos.getItem('videoList') || [];
    } catch (error) {
      console.error('Error fetching videos:', error);
      return [];
    }
  },

  async saveVideo(video) {
    try {
      const videos = await this.getAllVideos();
      const newVideo = { 
        ...video, 
        id: Date.now().toString(),
        lastModified: new Date().toISOString(),
        syncStatus: 'pending'
      };
      
      const updatedVideos = [...videos, newVideo];
      await stores.videos.setItem('videoList', updatedVideos);

      if (!isOnline) {
        await this.addPendingChange({
          type: 'create',
          data: newVideo,
          timestamp: Date.now()
        });
      }

      return newVideo;
    } catch (error) {
      console.error('Error saving video:', error);
      throw error;
    }
  },

  async updateVideo(videoId, updates) {
    try {
      const videos = await this.getAllVideos();
      const videoIndex = videos.findIndex(v => v.id === videoId);
      
      if (videoIndex === -1) throw new Error('Video not found');

      const updatedVideo = {
        ...videos[videoIndex],
        ...updates,
        lastModified: new Date().toISOString(),
        syncStatus: 'pending'
      };

      videos[videoIndex] = updatedVideo;
      await stores.videos.setItem('videoList', videos);

      if (!isOnline) {
        await this.addPendingChange({
          type: 'update',
          data: updatedVideo,
          timestamp: Date.now()
        });
      }

      return updatedVideo;
    } catch (error) {
      console.error('Error updating video:', error);
      throw error;
    }
  },

  async deleteVideo(videoId) {
    try {
      const videos = await this.getAllVideos();
      const updatedVideos = videos.filter(v => v.id !== videoId);
      await stores.videos.setItem('videoList', updatedVideos);

      if (!isOnline) {
        await this.addPendingChange({
          type: 'delete',
          data: { id: videoId },
          timestamp: Date.now()
        });
      }

      return true;
    } catch (error) {
      console.error('Error deleting video:', error);
      throw error;
    }
  },

  // Pending changes management
  async addPendingChange(change) {
    try {
      const changes = await stores.pendingChanges.getItem('changes') || [];
      changes.push(change);
      await stores.pendingChanges.setItem('changes', changes);
    } catch (error) {
      console.error('Error adding pending change:', error);
    }
  },

  async getPendingChanges() {
    return await stores.pendingChanges.getItem('changes') || [];
  },

  async clearPendingChange(changeId) {
    try {
      const changes = await this.getPendingChanges();
      const updatedChanges = changes.filter(c => c.timestamp !== changeId);
      await stores.pendingChanges.setItem('changes', updatedChanges);
    } catch (error) {
      console.error('Error clearing pending change:', error);
    }
  }
};

// Process pending changes when coming back online
async function processPendingChanges() {
  if (!isOnline) return;

  try {
    const changes = await videoStorage.getPendingChanges();
    
    // Sort changes by timestamp
    changes.sort((a, b) => a.timestamp - b.timestamp);

    for (const change of changes) {
      try {
        // TODO: Sync with backend when implemented
        console.log('Processing change:', change);
        await videoStorage.clearPendingChange(change.timestamp);
      } catch (error) {
        console.error('Error processing change:', change, error);
      }
    }
  } catch (error) {
    console.error('Error processing pending changes:', error);
  }
}