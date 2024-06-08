export const settingsConfig = [
    {
      key: 'musicPath',
      label: 'Music Path',
      type: 'list',
      default: ['']
    },
    {
      key: 'volume',
      label: 'Volume',
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01,
      default: 1.0
    },
    {
      key: 'theme',
      label: 'Theme',
      type: 'select',
      options: ['Light', 'Dark', 'System'],
      default: 'System'
    },
    {
      key: 'accentColor',
      label: 'Accent Color',
      type: 'color',
      default: '#EE3550'
    }
];