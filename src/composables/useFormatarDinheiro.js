import { ref } from 'vue';

export function useFormatarDinheiro() {
    const formatarDinheiro = (valor) => {
        if (valor == null) return '';
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
    };
    return { formatarDinheiro };
}