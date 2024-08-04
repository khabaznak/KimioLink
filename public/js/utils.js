/**
 * Adding the bare minimum
 */
document.addEventListener('DOMContentLoaded', (event) => {
    const addStageButton = document.getElementById('btnAddPlanStage');
    if (addStageButton) {
        addStageButton.addEventListener('click', showDialog);
    }

    const cancelDialogButton = document.getElementById('btnDialogCancel');
    if (cancelDialogButton) {
        cancelDialogButton.addEventListener('click', closeDialog);
    }

    document.getElementById('dialog-confirm').addEventListener('htmx:afterRequest', (event) => {
        closeDialog();
        showToast(event.detail.xhr.responseText);
    });
});

function showDialog() {
    const dialog = document.getElementById('dialog-confirm');
    if (dialog) {
        dialog.showModal();
    }
}

function closeDialog() {
    const dialog = document.getElementById('dialog-confirm');
    if (dialog) {
        dialog.close();
    }
}

function showToast(message) {
    const toast = document.getElementById('toastMessageHandler');
    if (toast) {
        console.log(toast.innerHTML);
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('hidden');
            console.log("toast dissapeared")
        }, 3000); // Hide after 3 seconds
    }
}