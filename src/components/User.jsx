import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import UpdateUser from './UpdateUser';

function User({ id, first_name, email, last_name, avatar }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <div className=' mt-4 col-md-4 col-lg-3 col-md-6 col-sm-12'>
        <div className='card ' style={{ borderRadius: '15%' }}>
          <div className='card-body text-center'>
            <div
              className='mx-auto d-block'
              style={{ height: '140px', width: '140px' }}
            >
              <img
                src={avatar}
                alt='avatar'
                className='rounded-circle h-100 w-100'
              />
            </div>
            <h5
              className='card-title mt-2 font-weight-bold'
              style={{ color: 'purple' }}
            >
              {first_name} {last_name}
            </h5>
            <p className='card-text mt-2 '>{email}</p>
            <Button color='info' outline onClick={toggle}>
              <i className='fa-solid fa-pen-to-square'></i>
            </Button>
          </div>
        </div>
      </div>

      <Modal centered isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit User</ModalHeader>
        <ModalBody>
          <UpdateUser id={id} toggle={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
}

export default User;
