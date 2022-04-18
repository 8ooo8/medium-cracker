setInterval(() => chrome.cookies.remove({name: 'uid', url: 'https://medium.com'}), 1000);
