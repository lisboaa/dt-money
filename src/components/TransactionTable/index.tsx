import { Container } from "./styles";

export function TransactionTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de websit</td>
                        <td className="deposit">R$12.00</td>
                        <td>R$Desenvolvimento</td>
                        <td>23/03/2023</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$1000.00</td>
                        <td>Casa</td>
                        <td>23/03/2023</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}