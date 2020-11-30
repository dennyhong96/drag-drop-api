const draggable = document.querySelector(".draggable");
const dropzone1 = document.querySelector(".dropzone-1");
const dropzone2 = document.querySelector(".dropzone-2");

// `dragstart` fired when the user starts dragging an element.
draggable.addEventListener("dragstart", function (evt) {
  // As evt.target gets drag around, drag evt keeps hold of dataTransfer
  evt.dataTransfer.setData("text/plain", evt.target.dataset.draggableId);
});

[dropzone1, dropzone2].forEach((dropzone) => {
  // `dragover` fired when an element is being dragged over a dropzone
  dropzone.addEventListener("dragover", function (evt) {
    // Have to prevent default to allow drop
    evt.preventDefault();

    // Gives dropzone special styles upon dragging over a dropzone
    dropzone.classList.add("dropzone--over");
  });

  // `drop` fired when an element is dropped on a dropzone.
  dropzone.addEventListener("drop", function (evt) {
    // Prevents default behavior of openning up a new tab
    evt.preventDefault();

    // Gets transferred data
    const draggableId = evt.dataTransfer.getData("text/plain");

    // Use transferred data to get draggble element
    const droppedElement = document.querySelector(`[data-draggable-id="${draggableId}"]`);

    // Move over the draggble element
    dropzone.append(droppedElement);

    // Remove special styles
    dropzone.classList.remove("dropzone--over");
  });

  // `dragleave` fired when a dragged element leaves a dropzone
  dropzone.addEventListener("dragleave", function (evt) {
    // Removes dropzone special styles upon draggable leaving dropzone
    dropzone.classList.remove("dropzone--over");
  });
});
