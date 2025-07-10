import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [votedLevels, setVotedLevels] = useState<Set<number>>(new Set());

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePlayClick = () => {
    window.open(
      "https://store.steampowered.com/app/322170/Geometry_Dash/",
      "_blank",
    );
  };

  const handleDownloadClick = () => {
    window.open("https://www.geometrydash.com/", "_blank");
  };

  const handleVote = (index: number) => {
    const newVotedLevels = new Set(votedLevels);
    if (votedLevels.has(index)) {
      newVotedLevels.delete(index);
    } else {
      newVotedLevels.add(index);
    }
    setVotedLevels(newVotedLevels);
  };

  const handleRequestLevel = () => {
    alert(
      "Форма для отправки реквеста уровня будет добавлена в следующем обновлении!",
    );
  };
  // Mock статистика игроков
  const playerStats = useMemo(
    () => [
      {
        name: "ProGamer2024",
        level: "Deadlocked",
        attempts: 847,
        percentage: 98,
      },
      {
        name: "GeometryMaster",
        level: "Bloodbath",
        attempts: 1254,
        percentage: 76,
      },
      {
        name: "CubeRunner",
        level: "Sonic Wave",
        attempts: 692,
        percentage: 84,
      },
      { name: "DashHero", level: "Tartarus", attempts: 2156, percentage: 67 },
    ],
    [],
  );

  // Mock реквесты уровней
  const levelRequests = useMemo(
    () => [
      {
        title: "Neon Paradise",
        author: "NeonCreator",
        difficulty: "Extreme Demon",
        votes: 156,
      },
      {
        title: "Crystal Caverns",
        author: "GemMaster",
        difficulty: "Insane",
        votes: 89,
      },
      {
        title: "Cyber City",
        author: "TechWiz",
        difficulty: "Hard Demon",
        votes: 234,
      },
      {
        title: "Mystic Forest",
        author: "NatureLover",
        difficulty: "Easy Demon",
        votes: 67,
      },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gd-dark via-gray-900 to-gd-gray">
      {/* Navigation */}
      <nav className="bg-gd-dark/90 backdrop-blur-sm border-b border-gd-orange/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Icon name="Zap" className="text-gd-orange mr-2" size={28} />
                <span className="text-white font-orbitron text-xl font-bold">
                  GEOMETRY DASH
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <button
                onClick={() => handleSectionClick("home")}
                className={`transition-colors font-roboto ${
                  activeSection === "home"
                    ? "text-gd-orange"
                    : "text-gray-300 hover:text-gd-orange"
                }`}
              >
                Главная
              </button>
              <button
                onClick={() =>
                  window.open("https://geometrydash.com/mods", "_blank")
                }
                className="text-gray-300 hover:text-gd-orange transition-colors font-roboto"
              >
                Моды
              </button>
              <button
                onClick={() =>
                  window.open("https://forum.geometrydash.com", "_blank")
                }
                className="text-gray-300 hover:text-gd-orange transition-colors font-roboto"
              >
                Форум
              </button>
              <button
                onClick={() => handleSectionClick("stats")}
                className={`transition-colors font-roboto ${
                  activeSection === "stats"
                    ? "text-gd-orange"
                    : "text-gray-300 hover:text-gd-orange"
                }`}
              >
                О игре
              </button>
              <button
                onClick={() => handleSectionClick("levels")}
                className={`transition-colors font-roboto ${
                  activeSection === "levels"
                    ? "text-gd-orange"
                    : "text-gray-300 hover:text-gd-orange"
                }`}
              >
                Уровни
              </button>
              <button
                onClick={() =>
                  window.open("https://support.geometrydash.com", "_blank")
                }
                className="text-gray-300 hover:text-gd-orange transition-colors font-roboto"
              >
                Поддержка
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gd-orange/20 to-gd-blue/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-6 animate-float">
            GEOMETRY <span className="text-gd-orange">DASH</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-roboto">
            Добро пожаловать в мир ритмических платформеров! Преодолевайте
            препятствия, создавайте уровни и соревнуйтесь с игроками со всего
            мира.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={handlePlayClick}
              className="bg-gd-orange hover:bg-gd-orange/80 text-white px-8 py-3 text-lg font-roboto animate-pulse-glow"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Играть сейчас
            </Button>
            <Button
              onClick={handleDownloadClick}
              variant="outline"
              className="border-gd-blue text-gd-blue hover:bg-gd-blue hover:text-white px-8 py-3 text-lg font-roboto"
            >
              <Icon name="Download" className="mr-2" size={20} />
              Скачать
            </Button>
          </div>

          <div className="flex justify-center space-x-3 mb-6">
            <Button
              onClick={() => alert("Открываем таблицу лидеров!")}
              variant="outline"
              className="border-gd-orange text-gd-orange hover:bg-gd-orange hover:text-white font-roboto"
            >
              <Icon name="Trophy" className="mr-2" size={16} />
              Лидеры
            </Button>
            <Button
              onClick={() => alert("Открываем соревнования!")}
              variant="outline"
              className="border-gd-blue text-gd-blue hover:bg-gd-blue hover:text-white font-roboto"
            >
              <Icon name="Gamepad2" className="mr-2" size={16} />
              Турниры
            </Button>
            <Button
              onClick={() => alert("Открываем сообщество!")}
              variant="outline"
              className="border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white font-roboto"
            >
              <Icon name="Users" className="mr-2" size={16} />
              Комьюнити
            </Button>
          </div>

          <div className="flex justify-center space-x-2">
            <Button
              onClick={() =>
                window.open(
                  "https://twitter.com/intent/tweet?text=Попробуйте Geometry Dash!",
                  "_blank",
                )
              }
              size="sm"
              variant="ghost"
              className="text-gray-400 hover:text-gd-blue hover:bg-gd-blue/10"
            >
              <Icon name="Twitter" size={16} />
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://www.facebook.com/sharer/sharer.php?u=https://geometrydash.com",
                  "_blank",
                )
              }
              size="sm"
              variant="ghost"
              className="text-gray-400 hover:text-gd-blue hover:bg-gd-blue/10"
            >
              <Icon name="Facebook" size={16} />
            </Button>
            <Button
              onClick={() =>
                window.open("https://www.youtube.com/c/geometrydash", "_blank")
              }
              size="sm"
              variant="ghost"
              className="text-gray-400 hover:text-gd-orange hover:bg-gd-orange/10"
            >
              <Icon name="Youtube" size={16} />
            </Button>
            <Button
              onClick={() => alert("Ссылка скопирована!")}
              size="sm"
              variant="ghost"
              className="text-gray-400 hover:text-gd-green hover:bg-gd-green/10"
            >
              <Icon name="Share" size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-8 bg-gd-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4 flex-wrap gap-2">
            <Button
              onClick={() => alert("Открываем редактор уровней!")}
              variant="outline"
              className="border-gd-orange text-gd-orange hover:bg-gd-orange hover:text-white font-roboto"
            >
              <Icon name="Edit" className="mr-2" size={16} />
              Редактор
            </Button>
            <Button
              onClick={() => alert("Показываем случайный уровень!")}
              variant="outline"
              className="border-gd-blue text-gd-blue hover:bg-gd-blue hover:text-white font-roboto"
            >
              <Icon name="Shuffle" className="mr-2" size={16} />
              Случайный
            </Button>
            <Button
              onClick={() => alert("Открываем горячие клавиши!")}
              variant="outline"
              className="border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white font-roboto"
            >
              <Icon name="Keyboard" className="mr-2" size={16} />
              Клавиши
            </Button>
            <Button
              onClick={() => alert("Открываем настройки!")}
              variant="outline"
              className="border-gd-green text-gd-green hover:bg-gd-green hover:text-white font-roboto"
            >
              <Icon name="Settings" className="mr-2" size={16} />
              Настройки
            </Button>
            <Button
              onClick={() => alert("Показываем статистику!")}
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-roboto"
            >
              <Icon name="BarChart" className="mr-2" size={16} />
              Моя стата
            </Button>
          </div>
        </div>
      </section>

      {/* Player Statistics */}
      <section id="stats" className="py-16 bg-gd-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-orbitron font-bold text-white mb-4">
              <Icon
                name="TrendingUp"
                className="inline mr-3 text-gd-blue"
                size={32}
              />
              Статистика игроков
            </h2>
            <p className="text-gray-400 font-roboto">
              Следите за достижениями лучших игроков
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {playerStats.map((player, index) => (
              <Card
                key={index}
                className="bg-gd-dark/70 border-gd-orange/20 hover:border-gd-orange/40 transition-all"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-white font-orbitron text-lg">
                    {player.name}
                  </CardTitle>
                  <CardDescription className="text-gd-blue font-roboto">
                    {player.level}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Прогресс</span>
                      <span className="text-gd-orange font-semibold">
                        {player.percentage}%
                      </span>
                    </div>
                    <Progress value={player.percentage} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Попытки</span>
                      <span className="text-white">
                        {player.attempts.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-gd-blue text-gd-blue hover:bg-gd-blue hover:text-white"
                        onClick={() =>
                          alert(`Смотрим рекорд игрока ${player.name}`)
                        }
                      >
                        <Icon name="Eye" className="mr-1" size={12} />
                        Смотреть
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-gd-orange text-gd-orange hover:bg-gd-orange hover:text-white"
                        onClick={() =>
                          alert(`Челлендж с ${player.name} отправлен!`)
                        }
                      >
                        <Icon name="Zap" className="mr-1" size={12} />
                        Вызов
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Level Requests */}
      <section id="levels" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-orbitron font-bold text-white mb-4">
              <Icon
                name="Star"
                className="inline mr-3 text-gd-orange"
                size={32}
              />
              Реквесты уровней
            </h2>
            <p className="text-gray-400 font-roboto">
              Голосуйте за уровни, которые должны попасть в игру
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {levelRequests.map((request, index) => (
              <Card
                key={index}
                className="bg-gd-dark/70 border-gd-blue/20 hover:border-gd-blue/40 transition-all"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white font-orbitron">
                        {request.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400 font-roboto">
                        by {request.author}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className={`font-roboto ${
                        request.difficulty.includes("Extreme")
                          ? "border-red-500 text-red-400"
                          : request.difficulty.includes("Hard")
                            ? "border-orange-500 text-orange-400"
                            : request.difficulty.includes("Insane")
                              ? "border-purple-500 text-purple-400"
                              : "border-green-500 text-green-400"
                      }`}
                    >
                      {request.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-gd-blue">
                        <Icon name="Heart" className="mr-2" size={16} />
                        <span className="font-roboto">
                          {request.votes + (votedLevels.has(index) ? 1 : 0)}{" "}
                          голосов
                        </span>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleVote(index)}
                        className={`border-gd-orange font-roboto ${
                          votedLevels.has(index)
                            ? "bg-gd-orange text-white"
                            : "text-gd-orange hover:bg-gd-orange hover:text-white"
                        }`}
                      >
                        <Icon name="ThumbsUp" className="mr-2" size={14} />
                        {votedLevels.has(index) ? "Проголосовал" : "Голосовать"}
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-gd-blue text-gd-blue hover:bg-gd-blue hover:text-white"
                        onClick={() =>
                          alert(`Смотрим превью уровня ${request.title}`)
                        }
                      >
                        <Icon name="Eye" className="mr-1" size={12} />
                        Превью
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-gd-green text-gd-green hover:bg-gd-green hover:text-white"
                        onClick={() => alert(`Скачиваем ${request.title}`)}
                      >
                        <Icon name="Download" className="mr-1" size={12} />
                        Скачать
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4">
            <Button
              onClick={handleRequestLevel}
              className="bg-gd-blue hover:bg-gd-blue/80 text-white px-8 py-3 font-roboto"
            >
              <Icon name="Plus" className="mr-2" size={20} />
              Предложить уровень
            </Button>
            <div className="flex justify-center space-x-3">
              <Button
                onClick={() => alert("Показываем топ уровней!")}
                variant="outline"
                className="border-gd-orange text-gd-orange hover:bg-gd-orange hover:text-white font-roboto"
              >
                <Icon name="TrendingUp" className="mr-2" size={16} />
                Топ уровни
              </Button>
              <Button
                onClick={() => alert("Открываем фильтры!")}
                variant="outline"
                className="border-gd-blue text-gd-blue hover:bg-gd-blue hover:text-white font-roboto"
              >
                <Icon name="Filter" className="mr-2" size={16} />
                Фильтры
              </Button>
              <Button
                onClick={() => alert("Открываем случайный уровень!")}
                variant="outline"
                className="border-gd-green text-gd-green hover:bg-gd-green hover:text-white font-roboto"
              >
                <Icon name="Dice1" className="mr-2" size={16} />
                Случайный
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gd-dark border-t border-gd-orange/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Zap" className="text-gd-orange mr-2" size={24} />
                <span className="text-white font-orbitron font-bold">
                  GEOMETRY DASH
                </span>
              </div>
              <p className="text-gray-400 font-roboto">
                Официальный сайт ритмического платформера
              </p>
            </div>
            <div>
              <h3 className="text-white font-orbitron font-semibold mb-4">
                Игра
              </h3>
              <ul className="space-y-2 text-gray-400 font-roboto">
                <li>
                  <button
                    onClick={handleDownloadClick}
                    className="hover:text-gd-orange transition-colors"
                  >
                    Скачать
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      alert(
                        "Минимальные требования: Windows 7+, 2GB RAM, DirectX 9.0c",
                      )
                    }
                    className="hover:text-gd-orange transition-colors"
                  >
                    Системные требования
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      window.open(
                        "https://steamcommunity.com/app/322170/announcements/",
                        "_blank",
                      )
                    }
                    className="hover:text-gd-orange transition-colors"
                  >
                    Обновления
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-orbitron font-semibold mb-4">
                Сообщество
              </h3>
              <ul className="space-y-2 text-gray-400 font-roboto">
                <li>
                  <button
                    onClick={() =>
                      window.open("https://forum.geometrydash.com", "_blank")
                    }
                    className="hover:text-gd-orange transition-colors"
                  >
                    Форум
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      window.open("https://discord.gg/geometrydash", "_blank")
                    }
                    className="hover:text-gd-orange transition-colors"
                  >
                    Discord
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      window.open("https://reddit.com/r/geometrydash", "_blank")
                    }
                    className="hover:text-gd-orange transition-colors"
                  >
                    Reddit
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-orbitron font-semibold mb-4">
                Поддержка
              </h3>
              <ul className="space-y-2 text-gray-400 font-roboto">
                <li>
                  <button
                    onClick={() =>
                      alert(
                        "Ответы на часто задаваемые вопросы скоро будут доступны!",
                      )
                    }
                    className="hover:text-gd-orange transition-colors"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      window.open("mailto:support@geometrydash.com", "_blank")
                    }
                    className="hover:text-gd-orange transition-colors"
                  >
                    Связаться с нами
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      window.open(
                        "https://github.com/robtopgames/geometrydash/issues",
                        "_blank",
                      )
                    }
                    className="hover:text-gd-orange transition-colors"
                  >
                    Баг-репорты
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gd-orange/20 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-roboto">
              &copy; 2024 Geometry Dash. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
