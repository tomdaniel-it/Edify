document.mediumEditor = new MediumEditor('.medium-editor-target', {
  spellcheck: false,
  targetBlank: true,
      toolbar: {
      allowMultiParagraphSelection: true,
      buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'],
      diffLeft: 0,
      diffTop: -10,
      firstButtonClass: 'medium-editor-button-first',
      lastButtonClass: 'medium-editor-button-last',
      relativeContainer: null,
      standardizeSelectionStart: false,
      static: false,
    }
});
