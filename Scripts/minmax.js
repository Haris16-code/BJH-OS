const draggableWindow = document.getElementById('draggableWindow');
  const minimizeButton = document.getElementById('minimizeButton');
  const maximizeButton = document.getElementById('maximizeButton');
  const restoreButton = document.getElementById('restoreButton');
  const closeButton = document.getElementById('closeButton');

  let isDragging = false;
  let prevX = 0;
  let prevY = 0;
  let isMaximized = false;
  let prevRect = draggableWindow.getBoundingClientRect();

  draggableWindow.style.width = `${prevRect.width}px`;
  draggableWindow.style.height = `${prevRect.height}px`;
  draggableWindow.style.left = `${prevRect.left}px`;
  draggableWindow.style.top = `${prevRect.top}px`;

  draggableWindow.addEventListener('mousedown', (e) => {
    isDragging = true;
    prevX = e.clientX;
    prevY = e.clientY;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const offsetX = e.clientX - prevX;
    const offsetY = e.clientY - prevY;
    const rect = draggableWindow.getBoundingClientRect();
    draggableWindow.style.left = rect.left + offsetX + 'px';
    draggableWindow.style.top = rect.top + offsetY + 'px';
    prevX = e.clientX;
    prevY = e.clientY;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  minimizeButton.addEventListener('click', () => {
    draggableWindow.style.display = 'none';
  });

  maximizeButton.addEventListener('click', () => {
    if (isMaximized) {
      draggableWindow.style.width = prevRect.width + 'px';
      draggableWindow.style.height = prevRect.height + 'px';
      draggableWindow.style.left = prevRect.left + 'px';
      draggableWindow.style.top = prevRect.top + 'px';
      isMaximized = false;
    } else {
      const rect = draggableWindow.getBoundingClientRect();
      prevRect = rect;
      draggableWindow.style.width = '100vw';
      draggableWindow.style.height = '100vh';
      draggableWindow.style.left = '0';
      draggableWindow.style.top = '0';
      isMaximized = true;
    }
  });

  restoreButton.addEventListener('click', () => {
    if (isMaximized) {
      maximizeButton.click();
    }
    draggableWindow.classList.toggle('restored');
  });

  closeButton.addEventListener('click', () => {
    draggableWindow.style.display = 'none';
  });