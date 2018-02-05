(() => {
  const socket = io();

  let messageList = document.querySelector('ul'),
      chatForm = document.querySelector('form'),
      nameInput = document.querySelector('.nickname'),
      chatMessage = chatForm.querySelector('.message'),
      nickName = null;

  function setNickname() {
    //debugger;
    nickName = this.value;
  }

  function handleSendMessage(e) {
    e.preventDefault(); //This prevents the default behaviour. A submit triggers a page reload, which we do not want.
    //debugger;

    //Ternary -> Checks to see if the variable exists and handle if it does, or if it doesn't. True is to the right of the colon, false is to the left.
    nickName = (nickName && nickName.length > 0) ? nickName : 'user';

    //Grabs the text from the input field at the bottom of the page.
    msg = `${nickName} says ${chatMessage.value}`;

    //Emits a chat event so that we can pass it through to the server and everyone else.
    socket.emit('chat message', msg);
    chatMessage.value = '';
    return false;
  }

  function appendMessage(msg) {
    //debugger;
    let newMsg = `<li>${msg.message}</li>`;
    messageList.innerHTML += newMsg;
  }

  function appendDMessage(msg) {
    //debugger;
    let newMsg = `<li>${msg}</li>`;
    messageList.innerHTML += newMsg;
  }

  nameInput.addEventListener('change', setNickname, false);
  chatForm.addEventListener('submit', handleSendMessage, false);
  socket.addEventListener('chat message', appendMessage, false);
  socket.addEventListener('disconnect message', appendDMessage, false);
})();
