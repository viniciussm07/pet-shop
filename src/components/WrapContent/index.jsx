import { useState, useEffect } from "react";
import api from "../../services/api";
import Hero from "../HeroSection";
import Navbar from "../Navbar";
import {
    Search,
    Label,
    InputWrap,
    Input,
    SearchButton,
    Img,
} from "../Navbar/NavbarElements"

export default function WrapContent() {
  const [produtos, setProdutos] = useState([]);
  const [tags, setTag] = useState("");
  const [inputUsuario, setInputUsuario] = useState("")

  useEffect(() => {
    api.get("/products").then(({ data }) => {
      setProdutos(data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const search = async (event) => {
    event.preventDefault();

    let aux = inputUsuario.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    console.log(aux)
    setTag(aux)
    const searchTags = tags.split(" ");
    const auxArr = [];
    
    for (let i = 0; i < searchTags.length; i++) {
      let response = await api.get(`/products/tags/${searchTags[i]}`);
      for (let j = 0; j < response.data.length; j++) {
        auxArr.push(response.data[j]);
      }
    }

    setProdutos(auxArr);
  };

  return (
    <>
      <Navbar>
      <Search onSubmit={search}>
        <Label />
        <InputWrap>
          <Input
            placeholder="Pesquisar"
            name="tag"
            value={inputUsuario}
            onChange={(e) => setInputUsuario(e.target.value)}
            type="text"
            required
          />
          <SearchButton>
            <Img src="/images/lupa50x50.webp" alt="" width={20} height={20} />
          </SearchButton>
        </InputWrap>
      </Search>
      </Navbar>
      <Hero produtos={produtos} />
    </>
  );
}
