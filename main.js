// Получаем ссылку на кнопку "Connect Wallet" по ее ID
const connectBtn = document.getElementById('connect-btn');

// Добавляем обработчик события click для кнопки "Connect Wallet"
connectBtn.addEventListener('click', async () => {
  // Проверяем, есть ли у пользователя MetaMask
  if (window.ethereum) {
    try {
      // Запрашиваем доступ к аккаунту пользователя
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('MetaMask подключен!');
    } catch (error) {
      console.error(error);
    }
  } else {
    console.error('MetaMask не найден!');
  }
});
