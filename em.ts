import Layout from '../../layouts/Layout.astro';
import Card from '../../components/Card.astro';
import Alert from '../../components/Alert.astro';
import { Image } from 'astro:assets';

const response = await fetch('https://approecoflo.vercel.app/admin/api/products?populate=*');
const products = await response.json();

const response2 = await fetch('https://approecoflo.vercel.app/admin/api/product-categories?populate=*');
const productCategories = await response2.json();
---

<Layout title="Kitchen sink">
  <main class="py-20">
    <div class="container">
      <h1 class="mb-10 text-4xl font-bold">Kitchen Sink</h1>

      <Alert type="info" title="Heads-up!">
        This page demonstrates all of the components available in the Approvideo template.
      </Alert>

      <section class="mb-20">
        <h2 class="mb-10 text-2xl font-bold">Avatars</h2>

        <div class="flex flex-wrap gap-6">
          <div class="flex items-center gap-2">
            <div class="relative inline-flex h-[42px] w-[42px] shrink-0 overflow-hidden rounded-full">
              <Image
                class="absolute inset-0 h-full w-full object-cover"
                src="/images/users/user-1.jpg"
                alt="Jese Leos image"
              />
            </div>
            <div>
              <p class="text-lg font-medium">Jese Leos</p>
              <p class="text-sm text-gray-500">@jese_leos</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <div class="relative inline-flex h-[42px] w-[42px] shrink-0 overflow-hidden rounded-full">
              <Image
                class="absolute inset-0 h-full w-full object-cover"
                src="/images/users/user-2.jpg"
                alt="Joseph Mcfall image"
              />
            </div>
            <div>
              <p class="text-lg font-medium">Joseph Mcfall</p>
              <p class="text-sm text-gray-500">@joseph_mcfall</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <div class="relative inline-flex h-[42px] w-[42px] shrink-0 overflow-hidden rounded-full">
              <Image
                class="absolute inset-0 h-full w-full object-cover"
                src="/images/users/user-3.jpg"
                alt="Kathie Melne image"
              />
            </div>
            <div>
              <p class="text-lg font-medium">Kathie Melne</p>
              <p class="text-sm text-gray-500">@kathie_melne</p>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-20">
        <h2 class="mb-10 text-2xl font-bold">Alerts</h2>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Alert type="info" title="Heads-up!">
            This is a info alert that you can use to highlight information to the user.
          </Alert>
          <Alert type="success" title="Looking good!">
            This is a success alert that you can use to highlight positive information to the user.
          </Alert>
          <Alert type="warning" title="Pay attention!">
            This is a warning alert that you can use to highlight negative information to the user.
          </Alert>
          <Alert type="danger" title="Oh snap!">
            This is a danger alert that you can use to highlight negative information to the user.
          </Alert>
        </div>
      </section>

      <section class="mb-20">
        <h2 class="mb-10 text-2xl font-bold">Badges</h2>

        <div class="flex flex-wrap gap-2">
          <span class="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            Default
          </span>
          <span class="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">
            Success
          </span>
          <span class="inline-flex items-center rounded-md bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-700/10">
            Warning
          </span>
          <span class="inline-flex items-center rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">
            Danger
          </span>
          <span class="inline-flex items-center rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
            Purple
          </span>
          <span class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-700/10">
            Neutral
          </span>
        </div>
      </section>

      <section class="mb-20">
        <h2 class="mb-10 text-2xl font-bold">Buttons</h2>

        <div class="flex flex-wrap gap-2">
          <button type="button" class="btn">Default</button>
          <button type="button" class="btn btn-blue">Primary</button>
          <button type="button" class="btn btn-green">Success</button>
          <button type="button" class="btn btn-yellow">Warning</button>
          <button type="button" class="btn btn-red">Danger</button>
          <button type="button" class="btn btn-outline">Outline</button>
          <button type="button" class="btn btn-disabled">Disabled</button>
        </div>
      </section>

      <section class="mb-20">
        <h2 class="mb-10 text-2xl font-bold">Cards</h2>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {
            products.data.map((product) => (
              <Card
                title={product.attributes.title}
                description={product.attributes.description}
                image={product.attributes.image.data.attributes.url}
                price={product.attributes.price}
                category={product.attributes.category.data.attributes.title}
                url={product.attributes.url}
              />
            ))
          }
        </div>
      </section>

      <section class="mb-20">
        <h2 class="mb-10 text-2xl font-bold">Dropdowns</h2>

        <div class="flex flex-wrap gap-6">
          <div>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              class="btn"
              type="button"
            >
              Dropdown button
              <svg
                class="ml-2 h-4 w-4"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              id="dropdown"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
            >

<ul
                class="py-2 text-sm text-gray-700"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                    Earnings
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <button
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              class="btn"
              type="button"
            >
              Dropdown hover
              <svg
                class="ml-2 h-4 w-4"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              id="dropdownHover"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
            >
              <ul class="py-2 text-sm text-gray-700">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                    Earnings
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-20">
        <h2 class="mb-10 text-2xl font-bold">Forms</h2>

        <form>
          <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">
                First name
              </label>
              <input
                type="text"
                id="first_name"
                class="form-input"
                placeholder="Bonnie"
                required=""
              />
            </div>
            <div>
              <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900">
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                class="form-input"
                placeholder="Green"
                required=""
              />
            </div>
            <div>
              <label for="company" class="block mb-2 text-sm font-medium text-gray-900">
                Company
              </label>
              <input
                type="text"
                id="company"
                class="form-input"
                placeholder="Acme Inc"
              />
            </div>
          </div>
          <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
            <div>
              <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                class="form-input"
                placeholder="123-456-7890"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900">
                Email address
              </label>
              <input
                type="email"
                id="email"
                class="form-input"
                placeholder="bonnie@acme.com"
                required=""
              />
            </div>
            <div>
              <label for="department" class="block mb-2 text-sm font-medium text-gray-900">
                Department
              </label>
              <select id="department" class="form-select">
                <option selected="">Choose a department</option>
                <option value="it">IT</option>
                <option value="sales">Sales</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
            <div>
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                class="form-textarea"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div class="lg:col-span-2">
              <label
                class="block mb-2 text-sm font-medium text-gray-900"
                for="file_input"
              >
                Upload file
              </label>
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                id="file_input"
                type="file"
              />
            </div>
          </div>
          <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="form-checkbox"
                required=""
              />
            </div>
            <label for="remember" class="ml-2 text-sm font-medium text-gray-900">
              I agree with the
              <a href="#" class="text-blue-600 hover:underline">
                terms and conditions
              </a>
              .
            </label>
          </div>
          <button type="submit" class="btn btn-blue">Submit</button>
        </form>
      </section>

      <section class="mb-20">
        <h2 class="mb-10 text-2xl font-bold">Grid</h2>

        <div class="grid grid-cols-2 gap-6">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="h-32 bg-gray-100"></div>
            <div class="h-32 bg-gray-100"></div>
            <div class="h-32 bg-gray-100"></div>
            <div class="h-32 bg-gray-100"></div>
          </div>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="h-32 bg-gray-100"></div>
            <div class="h-32 bg-gray-100"></div>
            <div class="h-32 bg-gray-100"></div>
            <div class="h-32 bg-gray-100"></div>
            <div class="h-32 bg-gray-100"></div>

<div class="h-32 bg-gray-100"></div>
          </div>
        </div>
      </section>

      <section class="mb-20">
        <h2 class="mb-10 text-2xl font-bold">Lists</h2>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside">
            <li>
              Get full access to all of our features
            </li>
            <li>
              Change and update information at any time
            </li>
            <li>
              Integrate it with all of your tools and systems
            </li>
            <li>
              Export your data for use in other applications
            </li>
          </ul>
          <ul class="max-w-md space-y-1 text-gray-500 list-decimal list-inside">
            <li>
              Get full access to all of our features
            </li>
            <li>
              Change and update information at any time
            </li>
            <li>
              Integrate it with all of your tools and systems
            </li>
            <li>
              Export your data for use in other applications
            </li>
          </ul>
        </div>
      </section>

      <section class="mb-20">
        <h2 class="mb-10 text-2xl font-bold">Modals</h2>

        <div class="flex flex-wrap gap-2">
          <button
            data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
            class="btn"
            type="button"
          >
            Toggle modal
          </button>
          <button
            data-modal-target="static-modal"
            data-modal-toggle="static-modal"
            class="btn"
            type="button"
          >
            Open static modal
          </button>
        </div>

        <div
          id="authentication-modal"
          tabindex="-1"
          aria-hidden="true"
          class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div class="relative w-full max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow">
              <button
                type="button"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                data-modal-hide="authentication-modal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
              <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900">
                  Sign in to our platform
                </h3>
                <form class="space-y-6" action="#">
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="form-input"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="form-input"
                      required=""
                    />
                  </div>
                  <div class="flex justify-between">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          class="form-checkbox"
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="remember" class="font-medium text-gray-900">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      class="text-sm text-blue-700 hover:underline"
                    >
                      Lost Password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-blue w-full"
                  >
                    Login to your account
                  </button>
                  <div class="text-sm font-medium text-gray-500">
                    Not registered?
                    <a href="#" class="text-blue-700 hover:underline">
                      Create account
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          id="static-modal"
          data-modal-backdrop="static"
          tabindex="-1"
          aria-hidden="true"
          class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div class="relative w-full max-w-2xl max-h-full">
            <div class="relative bg-white rounded-lg shadow">
              <button
                type="button"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                data-modal-hide="static-modal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
              <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900">
                  Modal title
                </h3>
                <p class="text-gray-500">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p class="text-gray-500">
                  Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <div class="flex justify-end mt-6">
                  <button
                    data-modal-hide="static-modal"
                    type="button"
                    class="btn btn-outline mr-2"
                  >
                    Cancel
                  </button>
                  <button type="button" class="btn btn-blue">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-20">
        <h2 class="mb-10 text-2xl font-bold">Navigation</h2>

        <nav class="flex flex-col gap-4">
          <div>
            <p class="block mb-2 text-lg font-medium text-gray-900">
              Default
            </p>
            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside">
              <li>
                <a href="#" class="text-blue-600 hover:underline">
                  Get full access to all of our features
                </a>
              </li>
              <li>
                Change and update information at any time
              </li>
              <li>
                <a href="#" class="text-blue-600 hover:underline">
                  Integrate it with all of your tools and systems
                </a>
              </li>
              <li>
                Export your data for use in other applications
              </li>
            </ul>
          </div>
          <div>
            <p class="block mb-2 text-lg font-medium text-gray-900">
              Inline
            </p>
            <ul class="flex flex-wrap gap-4">
              <li>
                <a href="#" class="text-blue-600 hover:underline">
                  Profile
                </a>
              </li>
              <li>
                <a href="#" class="text-blue-600 hover:underline">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" class="text-blue-600 hover:underline">
                  Messages
                </a>
              </li>
              <li>
                <a href="#" class="text-blue-600 hover:underline">
                  Downloads
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>

      <section class="mb-20">
        <h2 class="mb-10 text-2xl font-bold">Paginations</h2>

        <div class="flex flex-wrap gap-2">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li>
                <a href="#" class="page-item">
                  Previous
                </a>
              </li>
              <li>
                <a href="#" class="page-item">
                  1
                </a>
              </li>
              <li>
                <a href="#" class="page-item active">
                  2
                </a>
              </li>
              <li>
                <a href="#" class="page-item">
                  3
                </a>
              </li>
              <li>
                <a href="#" class="page-item">
                  Next
                </a>
              </li>
            </ul>
          </nav>
          <nav aria-label="Page navigation example">
            <ul class="pagination pagination-lg">
              <li>
                <a href="#" class="page-item">
                  Previous
                </a>
              </li>
              <li>
                <a href="#" class="page-item">
                  1
                </a>
              </li>
              <li>
                <a href="#" class="page-item active">
                  2
                </a>
              </li>
              <li>
                <a href="#" class="page-item">
                  3
                </a>
              </li>
              <li>
                <a href="#" class="page-item">
                  Next
                </a>
              </li>
            </ul>
          </nav>
          <nav aria-label="Page navigation example">
            <ul class="pagination pagination-sm">
              <li>
                <a href="#" class="page-item">
                  Previous
                </a>
              </li>
              <li>
                <a href="#" class="page-item">
                  1
                </a>
              </li>
              <li>
                <a href="#" class="page-item active">
                  2
                </a>
              </li>
              <li>
                <a href="#" class="page-item">
                  3
                </a>
              </li>
              <li>
                <a href="#" class="page-item">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section class="mb-20">
        <h2 class="mb-10 text-2xl font-bold">Progress bars</h2>

        <div class="w-full bg-gray-200 rounded-full">
          <div
            class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style="width: 45%"
          >
            45%
          </div>
        </div>
      </section>

      <section class="mb-20">
        <h2 class="mb-10 text-2xl font-bold">Tables</h2>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Product name
                </th>
                <th scope="col" class="px-6 py-3">
                  Category
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                products.data.map((product) => (
                  <tr class="bg-white border-b hover:bg-gray-50">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {product.attributes.title}
                    </th>
                    <td class="px-6 py-4">
                      {product.attributes.category.data.attributes.title}
                    </td>
                    <td class="px-6 py-4">
                      ${product.attributes.price}
                    </td>
                    <td class="px-6 py-4 text-right">
                      <a href="#" class="font-medium text-blue-600 hover:underline">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </section>

      <section class="mb-20">
        <h2 class="mb-10 text-2xl font-bold">Tabs</h2>

        <div class="mb-4 border-b border-gray-200">
          <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
            {
              productCategories.data.map((productCategory) => (
                <li class="mr-2" role="presentation">
                  <button
                    class="inline-block p-4 rounded-t-lg border-b-2"
                    id="profile-tab"
                    data-tabs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    {productCategory.attributes.title}
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
        <div id="myTabContent">
          <div
            class="hidden p-4 rounded-lg bg-gray-50"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <p class="text-sm text-gray-500">
              This is some placeholder content the <strong class="font-medium text-gray-800"
                >Profile tab's associated content</strong
              >. Clicking another tab will toggle the visibility of this one for the next. The tab 
              content when hidden, is <strong class="font-medium text-gray-800">removed from the DOM</strong
              >.
            </p>
          </div>
          <div
            class="hidden p-4 rounded-lg bg-gray-50"
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <p class="text-sm text-gray-500">
              This is some placeholder content the <strong class="font-medium text-gray-800"
                >Dashboard tab's associated content</strong
              >. Clicking another tab will toggle the visibility of this one for the next. The tab 
              content when hidden, is <strong class="font-medium text-gray-800">removed from the DOM</strong
              >.
            </p>
          </div>
          <div
            class="hidden p-4 rounded-lg bg-gray-50"
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <p class="text-sm text-gray-500">
              This is some placeholder content the <strong class="font-medium text-gray-800"
                >Settings tab's associated content</strong
              >. Clicking another tab will toggle the visibility of this one for the next. The tab 
              content when hidden, is <strong class="font-medium text-gray-800">removed from the DOM</strong
              >.
            </p>
          </div>
        </div>
      </section>

      <section class="mb-20">
        <h2 class="mb-10 text-2xl font-bold">Tooltips</h2>

        <div class="flex flex-wrap gap-2">
          <button
            data-tooltip-target="tooltip-default"
            type="button"
            class="btn"
          >
            Tooltip button
          </button>
          <div
            id="tooltip-default"
            role="tooltip"
            class="absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
          >
            Tooltip content
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </section>
    </div>
  </main>
</Layout>
