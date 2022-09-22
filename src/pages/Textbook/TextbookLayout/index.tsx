import { Menu, Popover } from 'antd';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import Container from '../../../components/Container';
import LayoutWithIntro from '../../../components/LayoutWithIntro';
import { RouteNames } from '../../../router';
import type { MenuProps } from 'antd';
import { useAppSelector } from './../../../hooks/useAppSelector';
import InfoSvg from '../../../assets/img/icons/info.svg';
import './styles.scss';

const content = (
  <ul className='pop-over__content'>
    <li>Difficult words are highlighted in red.</li>
    <li>Burning bulb means that a word is added to "Learned Words".</li>
  </ul>
);


const items: MenuProps['items'] = [
  {
    label: (
      <Link
        className={`nav__item`}
        to={RouteNames.TEXTBOOK}
      >Textbook</Link>
    ),
    key: RouteNames.TEXTBOOK.replaceAll('/', ''),
  },
];

const authItems = [
  ...items,
  {
    label: (
      <p className={`nav__item`}>My dictionary</p>
    ),
    key: '1',
    children: [
      {
        key: RouteNames.DIFFICULT_WORDS.replaceAll('/', ''),
        label: (
          <Link
            className={`nav__item`}
            to={RouteNames.DIFFICULT_WORDS}
          >My difficult words</Link>
        ),
      },
      {
        key: RouteNames.LEARNED_WORDS.replaceAll('/', ''),
        label: (
          <Link
            className={`nav__item`}
            to={`${RouteNames.LEARNED_WORDS}`}
          >My learned words</Link>
        ),
      },
    ],
  },
]

const TextbookLayout = () => {
  const { pathname } = useLocation();
  const { isAuth } = useAppSelector((state) => state.auth);
  const lastSegment = pathname.includes(RouteNames.UNITS) ? RouteNames.TEXTBOOK.replaceAll('/', '') :
    pathname.split("/").pop()?.replaceAll('/', '');
  const [current, setCurrent] = useState(RouteNames.TEXTBOOK.replaceAll('/', ''));
  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key);
  };
  return (
    <LayoutWithIntro title={'Textbook'}>
      <>
        <Container>
          <>

            <div className='menu'>
              <Menu mode="horizontal"
                selectedKeys={[lastSegment as string]}
                items={isAuth ? authItems : items} onClick={onClick}
                className={'nav'}
              />            {isAuth &&
                <Popover className='custom-pop-over' content={content} trigger="hover">
                  <img className={'info-icon'} src={InfoSvg} alt={'info icon'} />
                </Popover>}
            </div>
          </>
        </Container>
        <Outlet />
      </>
    </LayoutWithIntro>
  );
};

export default TextbookLayout;