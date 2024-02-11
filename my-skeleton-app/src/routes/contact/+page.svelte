<div class="flex w-full h-fit justify-center my-10">
  <span class="text-5xl text-primary-300">Send me a message!</span>
</div>
<div class="flex flex-col h-fit w-full justify-center items-center mt-10">
  <div class="flex flex-col justify-between items-center card w-11/12 h-3/4 rounded-2xl md:w-3/4">
    <div class="flex w-full items-center gap-y-4 flex-col mt-10">
      <label class="label w-10/12">
        <span>Name:</span>
        <input class="input" type="text" placeholder="Name" />
      </label>
      <label class="label w-10/12">
        <span>Email:</span>
        <input class="input" type="text" placeholder="Email" />
      </label>
      <label class="label w-10/12">
        <span>Subject:</span>
        <input class="input" type="text" placeholder="Subject" />
      </label>
      <label class="label w-10/12">
        <span>Message:</span>
        <textarea class="textarea resize-none" rows="5" placeholder="Message" />
      </label>
    </div>
    <!-- Button disabled until I connect with API -->
    <button on:click="{()=>{}}" class="mb-10 btn variant-ringed-primary w-fit [&>*]:pointer-events-none" use:popup={buttonDisabledPopupHover}>Send!</button>
    <div class="card p-4 variant-filled-error" data-popup="buttonDisabledPopupHover">
      <p>Email Sending Disabled</p>
      <div class="arrow variant-filled-secondary" />
    </div>
  </div>
</div>
<script lang="ts">
  import { getToastStore, type ToastSettings, type PopupSettings, popup } from '@skeletonlabs/skeleton';
  const toastStore = getToastStore();

  const buttonDisabledPopupHover: PopupSettings = {
    event: 'hover',
    target: 'buttonDisabledPopupHover',
    placement: 'top',
  }

  const message: ToastSettings = {
    message: 'Email Sent!',
  }

  function sendEmail() {
    toastStore.trigger(message);
  }
</script>