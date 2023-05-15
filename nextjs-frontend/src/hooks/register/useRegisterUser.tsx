import {useMutation, UseMutationOptions} from '@tanstack/react-query';
import {registerUser} from '../../services/API';
import {User} from '../../model/User';

export function useRegisterUser() {
    return useMutation({
        mutationFn: (user: User) => registerUser(user),
    } as UseMutationOptions<AuthenticatorResponse, Error, User>)
}