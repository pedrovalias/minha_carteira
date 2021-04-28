// Arquivo para sobrescrever tipos de arquivos e disponibilizar para a aplicação inteira
// Ele FORÇA seguir os mesmos atributos para os arquivos seguirem

import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
            primary: string,
            secondary: string,
            tertiary: string,
    
            white: string,
            black: string,
            grey: string,
    
            success: string,
            info: string,
            warning: string,
        },
    }
}


