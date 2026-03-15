import { PageNav } from '../components/PageNav';

const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL as string | undefined;

export function PrivacyPolicyPage() {
  return (
    <main className="page-shell">
      <PageNav />

      <section className="hero-card">
        <p className="eyebrow">Fin-9</p>
        <h1>Politica de Privacidade</h1>
        <p className="hero-copy">
          Esta politica descreve quais dados o Fin-9 coleta, como essas
          informacoes sao utilizadas e quais opcoes o usuario possui sobre seus
          dados.
        </p>

        <div className="info-banner">
          <strong>Ultima atualizacao:</strong> 15 de marco de 2026.
        </div>
      </section>

      <section className="content-grid">
        <article className="content-card">
          <h2>Dados coletados</h2>
          <ul>
            <li>Nome e e-mail informados no cadastro.</li>
            <li>Senha, armazenada de forma protegida e nao em texto puro.</li>
            <li>Contas financeiras cadastradas pelo usuario.</li>
            <li>Transacoes, categorias e demais informacoes financeiras inseridas no app.</li>
          </ul>
        </article>

        <article className="content-card accent-card">
          <h2>Finalidade do uso</h2>
          <ul>
            <li>Permitir autenticacao e acesso seguro a conta do usuario.</li>
            <li>Exibir, organizar e salvar dados financeiros pessoais no aplicativo.</li>
            <li>Manter o funcionamento das telas de perfil, dashboard e gerenciamento financeiro.</li>
          </ul>
        </article>

        <article className="content-card">
          <h2>Compartilhamento de dados</h2>
          <p>
            O Fin-9 nao foi projetado para vender dados pessoais. Os dados sao
            tratados para operar o aplicativo e a conta do proprio usuario.
          </p>
        </article>

        <article className="content-card">
          <h2>Armazenamento e seguranca</h2>
          <p>
            O aplicativo utiliza mecanismos de autenticacao e armazenamento
            seguro para proteger o acesso do usuario. Mesmo assim, nenhum meio
            digital e totalmente isento de risco.
          </p>
        </article>

        <article className="content-card">
          <h2>Direitos do usuario</h2>
          <ul>
            <li>Atualizar informacoes do perfil dentro do app.</li>
            <li>Solicitar a exclusao definitiva da conta e dos dados associados.</li>
            <li>Encerrar o uso do servico a qualquer momento.</li>
          </ul>
        </article>

        <article className="content-card">
          <h2>Exclusao da conta</h2>
          <p>
            A exclusao pode ser feita no proprio aplicativo, pela area de perfil,
            na secao "Zona de perigo". Ao excluir a conta, os dados vinculados ao
            usuario sao removidos de forma permanente.
          </p>
        </article>

        <article className="content-card full-width-card">
          <h2>Contato</h2>
          {supportEmail ? (
            <p>
              Para duvidas sobre privacidade ou sobre seus dados, entre em
              contato pelo e-mail <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
            </p>
          ) : (
            <p>
              Para duvidas sobre privacidade ou solicitacoes relacionadas aos
              seus dados, utilize o canal oficial de suporte informado pela
              equipe do Fin-9.
            </p>
          )}
        </article>
      </section>
    </main>
  );
}
