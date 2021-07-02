(() => ({
  name: 'Backdrop',
  icon: 'ContainerIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'Backdrop',
      options: [
        {
          type: 'SIZE',
          label: 'Spinner size',
          key: 'spinnerSize',
          value: '40px',
          configuration: {
            as: 'UNIT',
          },
        },
        {
          type: 'NUMBER',
          label: 'Spinner thickness',
          key: 'spinnerThickness',
          value: 3.6,
        },
        {
          type: 'COLOR',
          label: 'Spinner color',
          key: 'spinnerColor',
          value: 'White',
        },
      ],
      descendants: [],
    },
  ],
}))();
