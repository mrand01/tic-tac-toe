function component(): HTMLDivElement {
  const element: HTMLDivElement = document.createElement('div');

  element.innerHTML = 'Test';

  return element;
}

document.body.appendChild(component());
