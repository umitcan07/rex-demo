import { createContext } from 'react';

import { users } from '../data';
import { User } from '../types';

export const UserContext = createContext<User>(users[0]);
