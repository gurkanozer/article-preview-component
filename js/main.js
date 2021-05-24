/**Get all share buttons on the document */
const shareBtns = document.querySelectorAll(".share-btn");
/**Add event listener for alll and listen click.*/
shareBtns.forEach(shareBtn => {
    shareBtn.addEventListener("click", () => {
        toggleSharePanel(shareBtn)
    });
});
/**Find toggled card and show share menu for that*/
const toggleSharePanel = (shareBtn) => {
    const cardId = shareBtn.getAttribute("data-card-id");
    const shareMenu = document.querySelector(`${cardId} .share`);
    const dNone = shareMenu.classList.contains("d-none");
    const shareMenus = document.querySelectorAll(".share");
    shareMenus.forEach(sMenus => sMenus.classList.add("d-none"));
    if (dNone)
        shareMenu.classList.toggle("d-none");
}