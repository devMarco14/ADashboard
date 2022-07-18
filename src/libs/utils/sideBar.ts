import Path from 'routes/Path';

export const checkADManagementPage = (location: string) => {
  return location.includes(Path.ADManagementPage);
};
