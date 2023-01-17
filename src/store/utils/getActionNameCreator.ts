const getActionNameCreator = (slice: string) => (name: string) => `${slice}/${name}`;

export default getActionNameCreator;
