import {useMutation, UseMutationOptions} from '@tanstack/react-query';
import {User} from '../../model/User';
import {registerUser} from "../../services/api/authentication";

export function useRegisterUser() {
    return useMutation({
        mutationFn: (user: User) => registerUser(user),
    } as UseMutationOptions<AuthenticatorResponse, Error, User>)
}