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

    document.getElementById('dialog-confirm').addEventListener('htmx:afterRequest', closeDialog);
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