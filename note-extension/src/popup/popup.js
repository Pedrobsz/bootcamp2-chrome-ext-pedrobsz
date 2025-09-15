const noteArea = document.getElementById('note');
const saveBtn = document.getElementById('save');

// Carregar nota salva ao abrir popup
(async () => {
  const data = await chrome.storage.local.get(['note']);
  if (data.note) {
    noteArea.value = data.note;
  }
})();

// Salvar nota ao clicar no botão
saveBtn.addEventListener('click', async () => {
  const content = noteArea.value || '';
  await chrome.storage.local.set({ note: content });
  alert('Nota salva com sucesso!');
});

