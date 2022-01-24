export default function Title({tag = h1, children}) {
  const Tag = tag;
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
    </>
  );
}