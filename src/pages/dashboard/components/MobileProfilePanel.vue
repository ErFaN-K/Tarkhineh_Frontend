<template>
    <div class="w-full fixed bottom-4 left-0 right-0 flex justify-center">
        <div class="container">
            <div class="h-16 bg-white px-4 w-full flex justify-between items-center gap-x-2     shadow-md rounded-sm text-Primary">
                <!-- Routes Link -->
                <a href="#">
                    <svg class="size-6">
                        <use href="#user"></use>
                    </svg>
                </a>
                <a href="#">
                    <svg class="size-6">
                        <use href="#order"></use>
                    </svg>
                </a>
                <a href="#">
                    <svg class="size-6">
                        <use href="#heart"></use>
                    </svg>
                </a>
                <a href="#">
                    <svg class="size-6">
                        <use href="#location"></use>
                    </svg>
                </a>
                <!-- Logout button -->
                <button>
                    <svg class="size-6 rotate-180">
                        <use href="#exit"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>