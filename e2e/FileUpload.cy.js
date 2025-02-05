import 'cypress-file-upload';

describe('File Uploads', () => {

    it('Single File Upload', () => {

        cy.visit("https://the-internet.herokuapp.com/upload");

        cy.get('#file-upload').attachFile('Test1.docx');

        cy.get('#file-submit').click();

        cy.wait(5000);

        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')

    })

    it('File Upload - Rename', () => {

        cy.visit("https://the-internet.herokuapp.com/upload");

        cy.get('#file-upload').attachFile({ filePath: 'Test1.docx', fileName: 'justfile.docx' });

        cy.get('#file-submit').click();

        cy.wait(5000);

        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')


    })

    it('File Upload - Drag and drop', () => {

        cy.visit("https://the-internet.herokuapp.com/upload");

        cy.get('#drag-drop-upload').attachFile('Test1.docx', { subjectType: 'drag-n-drop' });

        cy.wait(5000);

        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains("Test1.docx");

    })

    it('Multiple files upload', () => {

        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

        cy.get('#filesToUpload').attachFile(['Test1.docx', 'Test2.txt'])

        cy.wait(5000);

        cy.get(':nth-child(6) > strong').contains('Files You Selected:');
    })

    it.only('File upload - Shadow Dom', () => {

        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');

        cy.get('.smart-browse-input', { includeShadowDom: true }).attachFile('Test1.docx');

        cy.wait(5000);

        cy.get('.smart-item-name', { includeShadowDom: true }).contains('Test1.docx')

    })
})