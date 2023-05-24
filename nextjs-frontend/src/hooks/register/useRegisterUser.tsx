import {useMutation, UseMutationOptions} from '@tanstack/react-query';
import {User} from '../../model/User';
import {register} from "../../services/api/authentication";

export function useRegisterUser() {
    return useMutation({
        mutationFn: (user: User) => register(user),
    } as UseMutationOptions<AuthenticatorResponse, Error, User>)
}