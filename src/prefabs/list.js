(() => ({
  name: 'List',
  icon: 'ContainerIcon',
  category: 'CUSTOM',
  structure: [
    {
      name: 'List',
      options: [
        {
          type: 'MODEL',
          label: 'Model',
          key: 'model',
          value: '',
        },
        {
          type: 'FILTER',
          label: 'Filter',
          key: 'filter',
          value: {},
          configuration: {
            dependsOn: 'model',
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
