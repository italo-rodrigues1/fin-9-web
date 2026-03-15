const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL as string | undefined;

export function AccountDeletionPage() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <p className="eyebrow">Fin-9</p>
        <h1>Exclusao de conta e remocao de dados</h1>
        <p className="hero-copy">
          Esta pagina explica como solicitar a exclusao da sua conta e dos seus
          dados no aplicativo Fin-9.
        </p>

        <div className="info-banner">
          <strong>Resumo rapido:</strong> o proprio aplicativo oferece a exclusao
          definitiva da conta na area de perfil.
        </div>
      </section>

      <section className="content-grid">
        <article className="content-card">
          <h2>Como excluir sua conta</h2>
          <ol>
            <li>Abra o aplicativo Fin-9 e faca login na conta que deseja remover.</li>
            <li>Acesse a aba de perfil.</li>
            <li>Role a tela ate a secao "Zona de perigo".</li>
            <li>Toque em "Deletar Conta".</li>
            <li>Confirme a exclusao para remover a conta permanentemente.</li>
          </ol>
        </article>

        <article className="content-card accent-card">
          <h2>Quais dados sao excluidos</h2>
          <ul>
            <li>Dados de cadastro da conta, como nome e e-mail.</li>
            <li>Credenciais de acesso armazenadas de forma segura.</li>
            <li>Contas financeiras cadastradas no aplicativo.</li>
            <li>Transacoes, incluindo receitas e despesas.</li>
            <li>Categorias vinculadas ao seu perfil.</li>
          </ul>
        </article>

        <article className="content-card">
          <h2>Prazo e efeito da exclusao</h2>
          <p>
            Quando a exclusao e confirmada dentro do app, a remocao da conta e
            dos dados vinculados e permanente e nao pode ser desfeita.
          </p>
        </article>

        <article className="content-card">
          <h2>Se voce nao conseguir acessar o aplicativo</h2>
          {supportEmail ? (
            <p>
              Envie uma solicitacao para{' '}
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a> informando o
              e-mail cadastrado no Fin-9 e o pedido de exclusao da conta.
            </p>
          ) : (
            <p>
              Caso voce nao consiga acessar o app, entre em contato pelo canal
              oficial de suporte informado pela equipe do Fin-9 e envie o e-mail
              cadastrado junto com o pedido de exclusao da conta.
            </p>
          )}
        </article>
      </section>
    </main>
  );
}
