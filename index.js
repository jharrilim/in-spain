const spains = {
  'spin': 'without the a',
  'span': 'without the i',
  'sain': 'without the p',
  'pain': 'without the s',
};

const whichOne = () => (
  (entries) => entries[Math.floor(Math.random() * entries.length)]
)(Object.entries(spains));

const title = document.getElementsByTagName('title')[0];
const main = document.getElementsByTagName('main')[0];

const sains = [
  '😳',
  '😂',
  '💀',
  'yeet',
  '🤤',
  '🥴',
  '🤣',
  '😏',
  '🥵',
  '💩',
  '😊',
  '👌',
  '👍',
  '🤏',
  '🅱',
]

export const run = () => {
  const spain = whichOne();
  title.text = `I'm in Spain ${spain[1]}`;

  const template = document.getElementById(spain[0]);
  if (!template) return;

  const templ = template.content.cloneNode(true);
  main.replaceChildren(templ);

  if (spain[0] === 'sain') {
    const addEmoji = () => {
      const sain = document.querySelector('main .sain');
      const emoji = sains[Math.floor(Math.random() * sains.length)];
      if (sain?.textContent?.length < 500) {
        sain.textContent += emoji;
        setTimeout(addEmoji, 300);
      }
    };
    addEmoji();
  }
};

document.querySelector('body')?.addEventListener('click', () => {
  run();
});
