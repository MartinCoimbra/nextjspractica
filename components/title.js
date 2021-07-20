export default function Title({ children }) {
  return (
    <>
      <h1 className="title">{children}</h1>
      <style jsx>
        {`
          .title {
            text-align: center;
        }
        `}
      </style>
    </>
  );
}
