import { createProtectedRouter } from '@bu/shared';
import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

export const router = Router();

const protectedRouter = createProtectedRouter(router);

router.route('/').post(UserController.newUser);

// router.route("/").get(UserController.list);
protectedRouter.get('/', UserController.list);

router.route('/:id').get(UserController.getUser);

router.route('/phone/:phone').get(UserController.getUserByPhone);

router.route('/email/:email').get(UserController.getUserByEmail);

router.route('/').patch(UserController.updateUser);

// protectedRouter.patch("/", UserController.updateUser);

protectedRouter.post('/setProfilePicture', UserController.setProfilePhoto);
