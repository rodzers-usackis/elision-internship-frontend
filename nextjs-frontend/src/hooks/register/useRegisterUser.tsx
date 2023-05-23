import {useMutation, UseMutationOptions} from '@tanstack/react-query';
import {RegisteringUser} from '../../model/RegisteringUser';
import {registerUser} from "../../services/api/authentication";

export function useRegisterUser() {
    return useMutation({
        mutationFn: (user: RegisteringUser) => registerUser(user),
    } as UseMutationOptions<AuthenticatorResponse, Error, RegisteringUser>)
}