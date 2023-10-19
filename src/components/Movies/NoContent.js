import { VscSearchStop } from 'react-icons/vsc';
function NoContent({ children, onClick }) {
  return (
    <div className="no-content-wrapper">
      <VscSearchStop />
      {children}
    </div>
  );
}
export default NoContent;
