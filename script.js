
document.getElementById("uploadForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const fileInput = document.getElementById("resumeFile");
    const preview = document.getElementById("preview");

    const file = fileInput.files[0];

    if (file && file.type === "application/pdf") {
        const fileURL = URL.createObjectURL(file);

        preview.innerHTML = `
            <h3>Resume Preview:</h3>
            <iframe src="${fileURL}" width="700" height="500"></iframe>
        `;
    } else {
        alert("Please upload a valid PDF file.");
    }
});
