    <template>
        <div class="relative h-full max-lg:h-35">
            <textarea
                  autocomplete="off"
                  id="order-description"
                  placeholder=" "
                  class="resize-none pt-4 size-full border border-gray-400 rounded-lg md:text-sm text-xs px-4 font-Dana outline-none peer focus:border-Primary"
                ></textarea>
                <label
                  for="order-description"
                  class="flex items-center gap-x-1 peer-focus:text-Primary lg:peer-focus:!-top-3 peer-focus:!-top-2 peer-placeholder-shown:top-4 lg:peer-placeholder-shown:right-6 peer-placeholder-shown:right-3 absolute lg:-top-3 -top-2 lg:right-6 right-3 px-1 bg-white text-gray-700 font-Dana md:text-base text-sm">
                    <svg class="size-4 md:size-6">
                        <use href="#calender"></use>
                    </svg>                
                    <span>توضیحات سفارش <span class="text-custom md:text-xs">(اختیاری)</span></span>
                </label>
        </div>
    </template>