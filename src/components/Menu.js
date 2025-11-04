import "./Menu.css";
import { useTranslation } from 'react-i18next';

const Menu = ({ onClick }) => {
  const { t } = useTranslation();
  const buttonLabel = t('nav.chill', { defaultValue: '02. Chill With Me' }).replace(/^\d+\.\s*/, '');

  return (
    <div className="Menu">
      <button className="Button" onClick={onClick}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default Menu;
