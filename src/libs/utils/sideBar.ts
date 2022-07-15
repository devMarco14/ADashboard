import Path from 'routes/Path';

export const checkADManagementPage = (location: string): boolean => {
  return location.includes(Path.ADManagementPage);
};
