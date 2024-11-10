import { videoStorage } from './services/storage.js';

document.addEventListener('DOMContentLoaded', async function() {
    await initializeVideos();
    initializeDrawers();
    initializeFormHandlers();
    initializeNetworkStatus();
});

async function initializeVideos() {
    try {
        const videos = await videoStorage.getAllVideos();
        renderVideos(videos);
    } catch (error) {
        console.error('Error initializing videos:', error);
        showError('Failed to load videos');
    }
}

function renderVideos(videos) {
    const tableBody = document.querySelector('tbody');
    if (!tableBody) return;

    const offlineClass = navigator.onLine ? '' : 'opacity-50';
    
    tableBody.innerHTML = videos.map(video => `
        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700 ${offlineClass} ${video.syncStatus === 'pending' ? 'bg-yellow-50' : ''}">
            <!-- Your existing row template -->
            ${video.syncStatus === 'pending' ? `
                <div class="text-xs text-yellow-600">Pending sync</div>
            ` : ''}
        </tr>
    `).join('');
}



async function fetchVideosFromSupabase() {
    const { data, error } = await supabase
      .from('videos')
      .select('*');
  
    if (error) {
      console.error('Error fetching videos:', error);
    } else {
      populateVideosTable(data);
    }
  }

function initializeNetworkStatus() {
    const updateNetworkStatus = () => {
        const statusIndicator = document.getElementById('network-status');
        if (statusIndicator) {
            statusIndicator.className = navigator.onLine ? 
                'text-green-500' : 
                'text-red-500';
            statusIndicator.textContent = navigator.onLine ? 
                'Online' : 
                'Offline - Changes will be saved locally';
        }
    };

    window.addEventListener('online', async () => {
        updateNetworkStatus();
        showSuccess('Back online - Syncing changes...');
        // Future: Trigger sync with backend
    });

    window.addEventListener('offline', () => {
        updateNetworkStatus();
        showWarning('Offline - Changes will be saved locally');
    });

    updateNetworkStatus();
}

// Add to your existing form handlers:
async function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    try {
        const drawer = form.closest('[id^="drawer-"]');
        const isCreate = drawer.id.includes('create');
        
        if (isCreate) {
            await videoStorage.saveVideo(data);
            showSuccess('Video saved locally');
        } else {
            const videoId = form.dataset.videoId;
            await videoStorage.updateVideo(videoId, data);
            showSuccess('Video updated locally');
        }
        
        if (drawer && window[drawer.id]) {
            window[drawer.id].hide();
        }
        
        // Refresh the video list
        const videos = await videoStorage.getAllVideos();
        renderVideos(videos);
    } catch (error) {
        console.error('Form submission error:', error);
        showError('Failed to save video');
    }
}

// Notification helpers
function showSuccess(message) {
    // Implement notification system
    console.log('Success:', message);
}

function showError(message) {
    // Implement notification system
    console.error('Error:', message);
}

function showWarning(message) {
    // Implement notification system
    console.warn('Warning:', message);
}