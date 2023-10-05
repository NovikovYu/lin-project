import { ReactNode, FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Head from 'next/head';
import ModalForm from './Modal-form';
import Header from './header';
import { setAccessKey } from '../../store/slices/sessionSlice';

interface IProps {
  children: ReactNode;
  pageTitle: string;
  pageDescription?: string;
  pageKeywords?: string;
}

const Layout: FC<IProps> = ({
  children,
  pageTitle,
  pageDescription = 'Page of Lintu progect',
  pageKeywords = 'Lintu, investments, finance, shares',
}) => {
  const [openFormSignInModal, setOpenFormSignInModal] = useState(false);
  const dispatch = useDispatch();
  const handleOpenSignInModal = () => {
    setOpenFormSignInModal(true);
  };
  const handleCloseSignInModal = () => {
    setOpenFormSignInModal(false);
  };

  useEffect(() => {
    const updateKeysFromLocalStorage = () => {
      const storedSession = localStorage.getItem('session');

      if (storedSession) {
        try {
          const sessionData = JSON.parse(storedSession);
          const { refresh, access } = sessionData;

          dispatch(setAccessKey(access));
        } catch (error) {
          console.error('Error parsing session data:', error);
        }
      } else {
        dispatch(setAccessKey(null));
      }
    };

    updateKeysFromLocalStorage();

    window.addEventListener('storage', updateKeysFromLocalStorage);

    return () => {
      window.removeEventListener('storage', updateKeysFromLocalStorage);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header handleOpenSignInModal={handleOpenSignInModal} />
      <ModalForm
        handleCloseSignInModal={handleCloseSignInModal}
        openFormSignInModal={openFormSignInModal}
      />
      {children}
      <footer></footer>
    </>
  );
};
export default Layout;
