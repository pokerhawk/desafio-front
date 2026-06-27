import { notify } from "./Toast/notify";

export function handleCopyLink(link: string){
  const href = window.location.href.split("/");
  const url = href[2];
  navigator.clipboard.writeText(`${url}/checkout/${link}`).then(() => {
    notify("success", "Link copiado");
  }).catch(err => {
    console.error('Error copying text: ', err);
  });
}

export function handleCopyString(data: string){
  navigator.clipboard.writeText(data).then(() => {
    notify("success", "Copiado");
  }).catch(err => {
    console.error('Error copying text: ', err);
  });
}
