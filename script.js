document.addEventListener('DOMContentLoaded', () => {
let selectedFile;

document.getElementById('file').addEventListener('change', function(event) {
    selectedFile = event.target.files[0];
});

document.getElementById('showName').addEventListener('click', () => {
    if (!selectedFile) {
        alert('Please select a CSV file first.');
        return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
        const csvTxt = event.target.result.trim();
        const lines = csvTxt.split('\n');

        const names = lines.slice(1).map(line => line.trim());

        if(names.legth === 0) {
            alert('No names found in the CSV file.');
            return;
        }

        document.getElementById('text').value = names.join(',');
    };

    reader.readAsText(selectedFile);
}); 
});