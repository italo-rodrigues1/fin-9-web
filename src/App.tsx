import { Navigate, Route, Routes } from 'react-router-dom';
import { AccountDeletionPage } from './pages/AccountDeletionPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AccountDeletionPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
