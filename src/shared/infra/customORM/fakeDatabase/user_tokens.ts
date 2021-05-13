type UserToken = {
  id: string;
  token: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
}

export let user_tokens: UserToken[] = [
  {
    id: '06fcd471-bf67-4404-b4ce-458844b3d962',
    token: '83998440-dfe6-4164-871d-1b59598cba2c',
    user_id: '1bb2f264-406f-4ab2-b674-9bf492dc2380',
    created_at: new Date('2021-05-13T22:07:03.193Z'),
    updated_at: new Date('2021-05-13T22:07:03.193Z')
  },
  {
    id: 'f982df01-d5a1-467e-a0c6-e71c4c0dcc5e',
    token: '2ab6c092-851d-46f8-be90-4ac7758d54cf',
    user_id: '6a0927e1-1c1a-4555-b63a-a84fba1e88fe',
    created_at: new Date('2021-05-13T14:07:03.193Z'),
    updated_at: new Date('2021-05-13T14:07:03.193Z')
  }
];
