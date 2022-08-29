import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../app/userSlice';
import { getUpdatedUser } from '../app/api';

function UpdateUser({ id, toggle }) {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);

  const [user, setUser] = useState(users.find((obj) => obj.id === id) || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await getUpdatedUser(id, user);
      dispatch(updateUser(data));
    } catch (error) {
      console.log(error);
    }
    toggle();
  };

  return (
    <>
      <div className='text-center' style={{ height: '140px', width: '140px' }}>
        <img
          src={user?.avatar}
          alt='avatar'
          className='rounded-circle  h-100 w-100'
          style={{ objectFit: 'contain' }}
        />
      </div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor='first_name'>First Name</Label>
          <Input
            id='first_name'
            name='first_name'
            value={user?.first_name}
            placeholder='Enter First Name'
            type='name'
            required
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='last_name'>Last Name</Label>
          <Input
            id='last_name'
            name='last_name'
            value={user?.last_name}
            placeholder='Enter Last Name'
            type='name'
            required
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            name='email'
            value={user?.email}
            placeholder='Enter a Email'
            type='email'
            required
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Button type='button' color='primary'>
            <Label className='m-0' htmlFor='avatar'>
              Upload
            </Label>
          </Button>
          <Input
            id='avatar'
            name='avatar'
            accept='image/*'
            style={{ display: 'none' }}
            type='file'
            onChange={(e) => {
              const { files } = e.target;
              setUser({ ...user, avatar: URL.createObjectURL(files[0]) });
            }}
          />
        </FormGroup>
        <Button variant='success' type='submit' block>
          Edit User
        </Button>
      </Form>
    </>
  );
}

export default UpdateUser;
