import { putAdByIdAPI } from 'libs/api/adAPI';
import { useCallback, useState } from 'react';
import { AdsData } from 'types/ad';

const useAdUpdateForm = (initialData: AdsData) => {
  const [form, setForms] = useState(initialData);

  const onChangeForm = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = event.target;
      setForms({ ...form, [name]: value });
    },
    [form],
  );

  const onChangeReportForm = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = event.target;
      setForms((prev) => ({
        ...prev,
        report: {
          ...prev.report,
          [name]: value,
          roas:
            name === 'convValue'
              ? ((value as unknown as number) / form.report.cost) * 100
              : (form.report.convValue / (value as unknown as number)) * 100,
        },
      }));
    },
    [form.report.convValue, form.report.cost],
  );

  const onUpdateForm = async () => {
    await putAdByIdAPI(form);
  };

  return { onUpdateForm, onChangeForm, onChangeReportForm, form };
};

export default useAdUpdateForm;
