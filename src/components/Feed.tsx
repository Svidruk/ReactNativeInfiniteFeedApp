import React, {useState, useEffect} from 'react';
import {ActivityIndicator, FlatList, RefreshControl, View} from 'react-native';
import FeedInfo from './FeedCard';
import {fetchImageData} from '../api/imageService';
import {ImageData} from '../types/interfaces';

const Feed = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [imageData, setImageData] = useState<ImageData[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadImages = async (currentPage: number) => {
    setIsLoading(true);
    try {
      const newImages = await fetchImageData(currentPage, 10);
      setImageData(prevData => [...prevData, ...newImages]);
    } catch (error) {
      console.error('Error loading images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    setPage(1);
    setImageData([]);
    await loadImages(1);
    setRefreshing(false);
  };

  const onEndReached = () => {
    if (!isLoading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    loadImages(page);
  }, [page]);

  return (
    <FlatList
      data={imageData}
      renderItem={({item}) => (
        <FeedInfo author={item.author} imageUrl={item.download_url} />
      )}
      keyExtractor={(item, index) => `${item.id}_${page}_${index}`}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        isLoading ? (
          // eslint-disable-next-line react-native/no-inline-styles
          <View style={{padding: 8}}>
            <ActivityIndicator size="large" color="#6345ba" />
          </View>
        ) : null
      }
    />
  );
};

export default Feed;
