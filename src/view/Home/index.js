import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import * as S from "./styles";

import api from "../../service/api";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskCard from "../../components/TaskCard";

const Home = ({ actived }) => {
  const [filter, setFilter] = useState("today");
  const [tasks, setTasks] = useState([]);
  const [load, setLoad] = useState(false);
  const [lateCount, setLateCount] = useState();

  async function loadTasks() {
    setLoad(true);
    await api
      .get(`/task/filter/${filter}/00:11:22:33:44:55`)
      .then((response) => {
        setTasks(response.data);
        setLoad(false);
      });
  }

  async function lateVerify() {
    await api.get(`/task/filter/late/00:11:22:33:44:55`).then((response) => {
      setLateCount(response.data.length);
    });
  }

  function Notification() {
    setFilter("late");
  }

  useEffect(() => {
    loadTasks();
    lateVerify();
  }, [filter]);

  return (
    <S.Container>
      <Header
        showNotification={true}
        showBack={false}
        pressNotification={Notification}
        late={lateCount}
      />
      <S.Filter>
        <S.FilterBtn onPress={() => setFilter("all")}>
          <S.FilterTextActive actived={filter === "all"}>
            Todos
          </S.FilterTextActive>
        </S.FilterBtn>
        <S.FilterBtn onPress={() => setFilter("today")}>
          <S.FilterTextActive actived={filter === "today"}>
            Hoje
          </S.FilterTextActive>
        </S.FilterBtn>
        <S.FilterBtn onPress={() => setFilter("month")}>
          <S.FilterTextActive actived={filter === "month"}>
            Mês
          </S.FilterTextActive>
        </S.FilterBtn>
        <S.FilterBtn onPress={() => setFilter("week")}>
          <S.FilterTextActive actived={filter === "week"}>
            Semana
          </S.FilterTextActive>
        </S.FilterBtn>
        <S.FilterBtn onPress={() => setFilter("year")}>
          <S.FilterTextActive actived={filter === "year"}>
            Ano
          </S.FilterTextActive>
        </S.FilterBtn>
      </S.Filter>

      <S.ViewTitle>
        <S.Title>TAREFAS {filter == "late" && "ATRASADAS"}</S.Title>
      </S.ViewTitle>

      <S.Scroll>
        {load ? (
          <ActivityIndicator color="#FF7811" size={50} />
        ) : (
          <S.List
            data={tasks}
            renderItem={({ item }) => (
              <TaskCard
                done={false}
                title={item.title}
                when={item.when}
                type={item.type}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </S.Scroll>
      <Footer icon={"add"} />
    </S.Container>
  );
};

export default Home;
